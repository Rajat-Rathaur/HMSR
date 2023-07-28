import styles from "./EditDetailsPopup.module.css";
const EditDetailsPopup = ({ onClose }) => {
  return (
    <div className={styles.editdetailspopup}>
      <div className={styles.logoutYesno}>
        <button className={styles.button} onClick={onClose}>
          <div className={styles.text}>Cancel</div>
        </button>
        <button className={styles.button1}>
          <div className={styles.text1}>Confirm</div>
        </button>
      </div>
      <div className={styles.textAndSupportingText}>
        <p className={styles.text2}>{`Edit Details `}</p>
        <p className={styles.supportingText}>
          Are you sure you want to Edit Details ?
        </p>
      </div>
      <img className={styles.featuredIcon} alt="" src="/featured-icon.svg" />
    </div>
  );
};

export default EditDetailsPopup;
