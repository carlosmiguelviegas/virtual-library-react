const LinkComponent = ({ link, onLinkClick }) => {

  return (
    <span className={styles.linkContainer} onClick={() => onLinkClick(link['path'])}>
      {link['icon']}<button className={`${styles.ankor} ${styles.link}`}>{link['path']}</button>
    </span>
  );

};

export default LinkComponent;
