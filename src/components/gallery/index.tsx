// import "./style.module.css";

const Gallery = () => {
  const url = "https://via.placeholder.com/500.jpg";

  return (
    <div>
      <header>
        <h1>DECODE LAB</h1>
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-twitter-square"></i> <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i> <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-envelope"></i> <span>E-mail</span>
            </a>
          </li>
        </ul>
      </header>

      <main>
        <ul>
          <li className="on">
            <a href="*">ALL</a>
          </li>
          <li>
            <a href=".odd">ODD</a>
          </li>
          <li>
            <a href=".even">EVEN</a>
          </li>
        </ul>

        <section>
          <article className="odd">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="even">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="odd">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="even">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="odd">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="even">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="odd">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="even">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="odd">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="even">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="odd">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="even">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="odd">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="even">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="odd">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="even">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="odd">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="even">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="odd">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
          <article className="even">
            <div>
              <img src={url} alt="" />
              <h2>Here comes title.</h2>
              <p>Here comes content description in detail.</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
