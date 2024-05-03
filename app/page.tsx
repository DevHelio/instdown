import styles from "./RootStyle.module.css";

function Header() {
  return <p className={styles.header}>Made by; HelioDev</p>;
}
function Moretools() {
  return <h3 className={styles.footer}>MORE TOOLS?</h3>;
}
function Title() {
  return (
    <div className={styles.titleBox}>
      <h1>INSTDOWN</h1>
      <p>Instagram video downloader</p>
    </div>
  );
}
function VideoInput() {
  return (
    <div className={styles.urlInput}>
      <input type="text" placeholder="Paste video url" />
      <button>
        <h3>Download</h3>
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <div className={styles.main}>
      <Header />
      <Title />
      <VideoInput />
      <Moretools />
    </div>
  );
}
