import React from "react";
import styles from "./OurPromise.module.css";
import { FaBreadSlice, FaAward } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go"
import { GiCupcake, GiStrawberry } from "react-icons/gi";


const data = [
    { icon: < GiCupcake />, title: "Baked Fresh" },
    { icon: <FaAward />, title: "High Quality" },
    { icon: <GiStrawberry />, title: "Natural Ingredients" },
    { icon: <GoHeartFill />, title: "Made with Love" },
];

function OurPromise() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Our Promise</h2>

            <div className={styles.wrapper}>
                {data.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.icon}>{item.icon}</div>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurPromise;