import Link from "next/link";
import styles from "../../styles/list.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { lists: data },
  };
};

const Ninjas = ({ lists }) => {
  return (
    <div>
      <h1>List(s) Names</h1>
      {lists.map((listTemp) => (
        <Link href={"/list/" + listTemp.id} key={listTemp.id}>
          <a className={styles.single}>
            <h3>{listTemp.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
