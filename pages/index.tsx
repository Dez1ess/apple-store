import type {GetServerSideProps, NextPage} from 'next'
import Stripe from 'stripe';
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { useState, useEffect, useContext } from 'react';
import Spinner from '../components/Spinner';
import Head from 'next/head';
import CartContext from '../components/context/CartContext';

interface Product extends Stripe.Product {}

interface Price extends Stripe.Price {
    product: string | Product | Stripe.DeletedProduct;
}

  export const getServerSideProps: GetServerSideProps = async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
        apiVersion: "2023-08-16"
    });

    let all: Price[] = [];
    let hasMore = true;
    let startingAfter: string | undefined;

    while (hasMore) {
        const res = await stripe.prices.list({
            expand: ['data.product'],
            limit: 100, 
            starting_after: startingAfter
        });

        const prices = res.data.filter(price => price.active);
        all = [...all, ...prices];
        
        hasMore = res.has_more;
        
        if (hasMore) {
            startingAfter = prices[prices.length - 1].id;
        }
    }

    const iphones = all.filter((item) => {
        const product = item.product as any;
        return product.metadata?.device === "iphone";
    });
    
    const macbooks = all.filter((item) => {
        const product = item.product as any;
        return product.metadata?.device === "macbook";
    });

    return {
        props: {
            all,
            iphones,
            macbooks,
        },
    }
}


type Props = {
    all: Stripe.Price[],
    iphones: Stripe.Price[],
    macbooks: Stripe.Price[],
}

interface CategorieState {
    all: boolean,
    iphone: boolean;
    macbook: boolean;
};

const Home: NextPage<Props> = ({all, iphones, macbooks}) => {
    const [categorie, setCategorie] = useState<CategorieState>({
        all: true,
        iphone: false,
        macbook: false,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((btn) => {
            if (btn.value === 'all') {
                btn.style.pointerEvents = 'none';
            }
        });

        setTimeout(() => {
            setLoading(false); 
        }, 500);

    }, []);

    const handleCategorieClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const button = e.target as HTMLButtonElement;
        const buttonValue = button.value as keyof CategorieState;

        setCategorie((prevCategorie) => {
            const buttons = document.querySelectorAll('button');
            buttons.forEach((btn) => {
                btn.style.pointerEvents = 'auto';
            });

            button.style.pointerEvents = 'none';

            setLoading(true); 

            setTimeout(() => {
                setLoading(false); 
            }, 500);

            return {
                ...prevCategorie,
                all: false,
                iphone: false,
                macbook: false,
                [buttonValue]: !prevCategorie[buttonValue],
            };
        });
    }

    const {alert} = useContext(CartContext);

    return (
        <>
        <Head>
            <title>Apple Store</title>
        </Head>
        <main className="bg-gray-100 min-h-screen">
            <Header />
            <div className="max-w-5xl mx-auto py-8 px-4">
                <div className="flex items-center gap-x-4 border-b pb-3 pl-5 lg:pl-0">
                    <button value="all" onClick={handleCategorieClick} style={{color: categorie.all ? "white" : "black", backgroundColor: categorie.all ? "black": "white"}} className={`font-normal tracking-wide transition-all leading-10 text-2xl shadow-lg px-4 rounded-md`}>
                        All
                    </button>
                    <button value="iphone" onClick={handleCategorieClick} style={{color: categorie.iphone ? "white" : "black", backgroundColor: categorie.iphone ? "black": "white"}} className={`font-normal tracking-wide transition-all leading-10 text-2xl shadow-lg px-4 rounded-md`}>
                        iPhone
                    </button>
                    <button value="macbook" onClick={handleCategorieClick} style={{color: categorie.macbook ? "white" : "black", backgroundColor: categorie.macbook ? "black": "white"}} className={`font-normal tracking-wide transition-all leading-10 text-2xl shadow-lg px-4 rounded-md`}>
                        MacBook
                    </button>
                </div>

                <div className="mt-8 grid justify-items-center grid-cols-1 gap-y-20 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {/* All */}
                    {!loading && categorie.all && all.map((p) => <ProductCard cardId={p.id} key={p.id} price={p} />)}
                    {/* Iphones */}
                    {!loading && categorie.iphone && iphones.map((p) => <ProductCard cardId={p.id} key={p.id} price={p} />)}
                    {/* MacBooks */}
                    {!loading && categorie.macbook && macbooks.map((p) => <ProductCard cardId={p.id} key={p.id} price={p} />)}
                </div>
                <div className="justify-center items-center h-80" style={{ display: loading ? 'flex' : 'none' }}>
                    {loading && <Spinner />}
                </div>
            </div>
            <div className={`w-[max-content] fixed bottom-10 left-5 transform ${alert ? 'customFadeInOut' : ''}`}>
                {alert}
            </div>
        </main>
        </>
    )
}

export default Home
