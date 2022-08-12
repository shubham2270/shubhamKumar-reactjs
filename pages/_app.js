import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className='p-6 bg-white shadow-lg rounded-md text-2xl text-center'>
        UPayments Store
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
