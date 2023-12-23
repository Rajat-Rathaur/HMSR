import { useCallback } from "react";
import NavBar from "../../components/NavBar";
import styles from "./HomeExterior1.module.css";
const HomeExterior1 = () => {
 

  return (
    <div className="bg-yellow-200 w-full flex">grdfxc  </div>
    // <div className={styles.homeexterior}>
    //   <div className={styles.home}>
    //     <div className={styles.framework}>
    //       <div className={styles.nameParent}>
    //         <h3 className={styles.name}>Profession</h3>
    //         <span className={styles.tomiwaOyeleduDolapo}>Students</span>
    //       </div>
    //       <h2 className={styles.workDetails}>Work Details</h2>
    //     </div>
    //     <div className={styles.framefee}>
    //       <label className={styles.feeDetails}>Fee details</label>
    //       <div className={styles.instanceParent}>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name}>Fees</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>100000</span>
    //         </div>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name}>Current Status</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>Paid</span>
    //         </div>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name3}>Phone no</h3>
    //           <span className={styles.tomiwaOyeleduDolapo3}>8765432654</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.frameguardian}>
    //       <div className={styles.instanceGroup}>
    //         <div className={styles.nameParent1}>
    //           <h3 className={styles.name}>Address Line</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>
    //             Gurgaon, Haryana
    //           </span>
    //         </div>
    //         <div className={styles.nameParent2}>
    //           <h3 className={styles.name}>Name</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>Yours</span>
    //         </div>
    //         <div className={styles.nameParent3}>
    //           <h3 className={styles.name}>Relationship</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>Father</span>
    //         </div>
    //         <div className={styles.nameParent4}>
    //           <h3 className={styles.name}>Phone no</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>8765432654</span>
    //         </div>
    //       </div>
    //       <h2 className={styles.workDetails}>Guardian details</h2>
    //     </div>
    //     <div className={styles.frameadditional}>
    //       <div className={styles.instanceContainer}>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name}>Date Of Join</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>8/15/17</span>
    //         </div>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name}>Valid Till</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>8/15/17</span>
    //         </div>
    //       </div>
    //       <h2 className={styles.workDetails}>Additional details</h2>
    //     </div>
    //     <div className={styles.framecontact}>
    //       <div className={styles.instanceParent1}>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name}>Phone Number</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>09034867656</span>
    //         </div>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name}>Email</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>
    //             tomilola@me.com
    //           </span>
    //         </div>
    //       </div>
    //       <h2 className={styles.workDetails}>Contact Details</h2>
    //     </div>
    //     <div className={styles.frameaddress}>
    //       <div className={styles.instanceParent1}>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name}>Address Line</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>
    //             No 35 Jimmy Ebi Street
    //           </span>
    //         </div>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name}>City</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>Yenagoa</span>
    //         </div>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name}>state</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>Bayelsa</span>
    //         </div>
    //         <div className={styles.nameGroup}>
    //           <h3 className={styles.name}>pincode</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>444001</span>
    //         </div>
    //       </div>
    //       <h2 className={styles.workDetails}>Address</h2>
    //     </div>
    //     <div className={styles.framedaskinfo}>
    //       <div className={styles.instanceParent3}>
    //         <div className={styles.nameParent13}>
    //           <h3 className={styles.name}>Branch</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>Nest</span>
    //         </div>
    //         <div className={styles.nameParent14}>
    //           <h3 className={styles.name}>Room no</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>103</span>
    //         </div>
    //         <div className={styles.nameParent15}>
    //           <h3 className={styles.name}>Manager Name</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>Anish Oswal</span>
    //         </div>
    //         <div className={styles.nameParent16}>
    //           <h3 className={styles.name}>Bed no</h3>
    //           <span className={styles.tomiwaOyeleduDolapo}>2</span>
    //         </div>
    //       </div>
    //       <h2 className={styles.daskInfo}>DASK Info</h2>
    //     </div>
    //     <div className={styles.framename}>
    //       <div className={styles.nameGroup}>
    //         <h3 className={styles.name}>Name</h3>
    //         <span className={styles.tomiwaOyeleduDolapo}>
    //           Tomiwa Oyeledu Dolapo
    //         </span>
    //       </div>
    //       <div className={styles.nameGroup}>
    //         <h3 className={styles.name}>Hostel ID</h3>
    //         <span className={styles.tomiwaOyeleduDolapo}>1234</span>
    //       </div>
    //       <div className={styles.nameGroup}>
    //         <h3 className={styles.name}>Date of Birth</h3>
    //         <span className={styles.tomiwaOyeleduDolapo}>
    //           August 27th, 1999
    //         </span>
    //       </div>
    //       <div className={styles.nameGroup}>
    //         <h3 className={styles.name}>Gender</h3>
    //         <span className={styles.tomiwaOyeleduDolapo}>Female</span>
    //       </div>
    //     </div>
    //     <img
    //       className={styles.studentphotoIcon}
    //       alt=""
    //       src="/rectangle-111.svg"
    //     />
    //     <h2 className={styles.heading}>Personal Details</h2>
    //   </div>
    //   {/* <NavBar
 
    //   /> */}
    // </div>
  );
};

export default HomeExterior1;
