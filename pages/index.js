const Home = (props) => {
  const {MyData} = props
  console.log(MyData);
  return (
    <div style={{textAlign:"center"}}>
    <h1>Next JS</h1>
    {MyData.map((item)=>{
      return(
        <>
        <h3>{item?.name}</h3>
        <p>{item?.email}</p>
        </>
      )
    })}
    </div>
  );
  
};

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const MyData = await res.json();
  return {
    props: { MyData: MyData,testingData:"umair"}
  };
}

export default Home;
