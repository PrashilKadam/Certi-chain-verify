import { useEffect, useState } from "react";
import styles from "./Display.module.css";

function Display({ state }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    const { ABI, contract } = state;
    async function EducationDetails() {
      const educationDetails = await contract.methods.getDetails().call();
      console.log(educationDetails);
      setContent(educationDetails);
    }
    contract && EducationDetails();
    // EducationDetails();
  }, [state]);

  return (
    <>
      <div className={styles.section}>
      {content!=="" &&
        content.map((details, index) => {
          return (
            <div className={styles.content} key={index}>
                {/* {console.log(details)} */}
              <div>Roll No : {details.rollNo.toString()}</div>
              <div>Name : {details.name}</div>
              <div>Degree : {details.degree}</div>
              <div>CGPA : {details.CGPA.toString()}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Display;
