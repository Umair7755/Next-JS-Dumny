const Home = (props) => {
  console.log(props.MyData);
  return <h1>Home</h1>;
};

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const MyData = await res.json();
  return {
    props: { MyData: MyData,testingData:"umair"}
  };
}

export default Home;
