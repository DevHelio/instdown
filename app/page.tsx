"use client";

import styles from "./RootStyle.module.css";
import React, { useState } from "react";

import getVideoDownload from "./downloadvid";

function Client() {
  function Header() {
    return <p className={styles.header}>Made by; HelioDev</p>;
  }
  function Moretools() {
    "use client";
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

  const [downloadLink, setDownloadLink] = useState<string>("");
  const [isDownloading, setIsDownloading] = useState(false);
  function VideoInput() {
    const [url, setUrl] = useState<string>("");
    return (
      <div className={styles.urlInput}>
        <input
          type="text"
          placeholder="Paste video url"
          value={url}
          onChange={(event) => {
            setUrl(event.target.value);
          }}
        />
        <button
          onClick={async () => {
            setIsDownloading(true);
            let templink = await getVideoDownload(url);
            setDownloadLink(templink);
          }}
        >
          <h3>Download</h3>
        </button>
      </div>
    );
  }

  function DownloadLink() {
    return (
      <div className={styles.downloadLink}>
        <a href={downloadLink} download>
          <img src="/cloudDownload.png" alt="" />
        </a>
      </div>
    );
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.main}>
        <Header />
        <Title />
        <VideoInput />

        <Moretools />
      </div>
      {isDownloading && downloadLink === "" ? (
        <h3 className={styles.downloading}>DOWNLOADING...</h3>
      ) : null}
      {isDownloading && downloadLink !== "" ? <DownloadLink /> : null}
    </div>
  );
}

export default Client;
