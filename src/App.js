import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import bg1 from './assets/bg3.jpg'
import bg2 from './assets/bg2.jpg'

const App = () => {
  return (
    <>
      <Header title="Я молодец" descr="наверное"/>
      <Layout title="СОЗДАЮ" descr="всяческие интеракивные элементики" urlBg={bg1}/>
      <Layout title="Я не очень-то креативный" descr="ага-ага-ага" colorBg="yellow"/>
      <Layout title="И ещё я очень долго всё делаю" descr="поэтому мне пришлось обмануть бота подставным pull request" urlBg={bg2}/>
      <Footer />
    </>
  );
}

export default App;
