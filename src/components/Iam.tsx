import '../Iam.css';

const message: string = "Systems Engineering and Computing student in Universidad EIA, located in Envigado, Colombia. My interests are Web Development, Databases and Cloud Computing. I also enjoy Theology, History, Reading, Watching Football and Basketball.";

function Iam(){
  return(
    <>
      <section id="iam">
        <div className="iam-container">
          <img 
            className="iam-autor"
            src="/iam.png" 
            alt="Autor foto" 
          />
          <div className='iam-info'>
            <h1 className="iam-title1">Hello! I'm Pablo</h1>
            <h2 className='iam-intro'>{message}</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default Iam;