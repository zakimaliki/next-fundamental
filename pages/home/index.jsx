import Head from "next/head";
import React, { useEffect } from "react";

const Home = () => {
  // useEffect(() => {
  //   document.title = 'Home Page';
  // });
  console.log('My API', process.env.API_BACKEND);

  return (
    <div>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: yellow;
        }
        @media (max-width: 600px) {
          div {
            background: red;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
      Hello world
      <Head>
      <title>My page hello</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>scoped!</p>
    </div>
  );
};

export default Home;
