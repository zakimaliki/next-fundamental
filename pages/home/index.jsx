import axios from "axios";
import Head from "next/head";
import React, { useEffect } from "react";
import { useState } from "react";

// export async function getServerSideProps() {
//   const res = await axios.get("http://localhost:3004/posts");
//   return {
//     props: { data: res.data },
//   };
// }

const Home = () => {
  // console.log(data);
  // const [data, setData] = useState([]);
  const [text, setText] = useState("");
  // useEffect(() => {
  //   axios.get("http://localhost:3004/posts").then((res) => setData(res.data));
  // }, []);

  // const submit = () => {
  //   axios
  //     .post("http://localhost:3004/posts", {
  //       id: 3,
  //       title: "json-server",
  //       author: "typicode",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  return (
    <div>
      {/* <style jsx>{`
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
      `}</style> */}
      {/* <Head>
        <title>My page hello</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={submit}>kirim</button>
      <hr />
      <p>{JSON.stringify(data)}</p>
      <ul> */}
      {/* {data.map((item) => (
        <li>        
          {item.author}
        </li>
        ))} */}
        {/* {products.map((item, index) => (
            <tr key={item.id} className="text-center">
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td>
                <a target="_blank" rel="noopener noreferrer" href={item.photo}>
                  {item.photo}
                </a>
              </td>
              <td>{item.description}</td>
          ))} */}
      {/* </ul> */}
    </div>
  );
};

export default Home;
