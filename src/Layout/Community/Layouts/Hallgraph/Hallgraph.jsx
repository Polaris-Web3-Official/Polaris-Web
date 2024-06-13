import Footer from "../../../../components/comuns/Footer";
import Header from "../../../../components/comuns/Header";
import NavBar from "../../../../components/navigation/NavBar/NavBar";
import NavBarTo from "../../../../components/navigation/NavBarTo/NavBarTo";
import Layout from "../../components/Layout";

export default function Hallgraph() {
  return (
    <div className='container'>
      <NavBar />
        <Header />
        <Layout />
        <Footer />
      <NavBarTo />
    </div>
  )
}
