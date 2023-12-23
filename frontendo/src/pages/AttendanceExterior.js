import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./AttendanceExterior.module.css";
const AttendanceExterior = () => {
  const navigate = useNavigate();

  const onNotificationsClick = useCallback(() => {
    navigate("/notifications");
  }, [navigate]);

  const onAttendanceClick = useCallback(() => {
    navigate("/attendance");
  }, [navigate]);

  const onPaymentsClick = useCallback(() => {
    navigate("/payments");
  }, [navigate]);

  const onRequestsClick = useCallback(() => {
    navigate("/request");
  }, [navigate]);

  const onServicesClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onUpdateClick = useCallback(() => {
    navigate("/update");
  }, [navigate]);

  return (
    <div className={styles.attendanceexterior}>
      <div className={styles.attendance}>
        <div className={styles.calendar}>
          <div className={styles.div}>
            <img className={styles.child} alt="" src="/rectangle-3.svg" />
            <b className={styles.b}>4</b>
          </div>
          <div className={styles.div1}>
            <img className={styles.item} alt="" src="/rectangle-31.svg" />
            <b className={styles.b}>3</b>
          </div>
          <div className={styles.div2}>
            <img className={styles.item} alt="" src="/rectangle-32.svg" />
            <b className={styles.b}>2</b>
          </div>
          <div className={styles.div3}>
            <img className={styles.item} alt="" src="/rectangle-33.svg" />
            <b className={styles.b}>1</b>
          </div>
          <div className={styles.div4}>
            <img className={styles.item} alt="" src="/rectangle-34.svg" />
            <b className={styles.b4}>31</b>
          </div>
          <div className={styles.div5}>
            <img className={styles.item} alt="" src="/rectangle-35.svg" />
            <b className={styles.b4}>30</b>
          </div>
          <div className={styles.div6}>
            <img className={styles.item} alt="" src="/rectangle-36.svg" />
            <b className={styles.b4}>29</b>
          </div>
          <div className={styles.div7}>
            <img className={styles.child} alt="" src="/rectangle-37.svg" />
            <b className={styles.b4}>28</b>
          </div>
          <div className={styles.div8}>
            <img className={styles.item} alt="" src="/rectangle-38.svg" />
            <b className={styles.b4}>27</b>
          </div>
          <div className={styles.div9}>
            <img className={styles.item} alt="" src="/rectangle-39.svg" />
            <b className={styles.b4}>26</b>
          </div>
          <div className={styles.div10}>
            <img className={styles.item} alt="" src="/rectangle-310.svg" />
            <b className={styles.b4}>25</b>
          </div>
          <div className={styles.div11}>
            <img className={styles.item} alt="" src="/rectangle-311.svg" />
            <b className={styles.b4}>24</b>
          </div>
          <div className={styles.div12}>
            <img className={styles.item} alt="" src="/rectangle-312.svg" />
            <b className={styles.b4}>23</b>
          </div>
          <div className={styles.div13}>
            <img className={styles.item} alt="" src="/rectangle-313.svg" />
            <b className={styles.b4}>22</b>
          </div>
          <div className={styles.div14}>
            <img className={styles.child} alt="" src="/rectangle-314.svg" />
            <b className={styles.b4}>21</b>
          </div>
          <div className={styles.div15}>
            <img className={styles.item} alt="" src="/rectangle-315.svg" />
            <b className={styles.b4}>20</b>
          </div>
          <div className={styles.div16}>
            <img className={styles.item} alt="" src="/rectangle-316.svg" />
            <b className={styles.b4}>19</b>
          </div>
          <div className={styles.div17}>
            <img className={styles.item} alt="" src="/rectangle-317.svg" />
            <b className={styles.b4}>18</b>
          </div>
          <div className={styles.div18}>
            <img className={styles.item} alt="" src="/rectangle-318.svg" />
            <b className={styles.b4}>17</b>
          </div>
          <div className={styles.div19}>
            <img className={styles.item} alt="" src="/rectangle-319.svg" />
            <b className={styles.b4}>16</b>
          </div>
          <div className={styles.div20}>
            <img className={styles.item} alt="" src="/rectangle-320.svg" />
            <b className={styles.b4}>15</b>
          </div>
          <div className={styles.div21}>
            <img className={styles.child} alt="" src="/rectangle-321.svg" />
            <b className={styles.b4}>14</b>
          </div>
          <div className={styles.div22}>
            <img className={styles.item} alt="" src="/rectangle-322.svg" />
            <b className={styles.b4}>13</b>
          </div>
          <div className={styles.div23}>
            <img className={styles.item} alt="" src="/rectangle-323.svg" />
            <b className={styles.b4}>12</b>
          </div>
          <div className={styles.div24}>
            <img className={styles.item} alt="" src="/rectangle-324.svg" />
            <b className={styles.b4}>11</b>
          </div>
          <div className={styles.div25}>
            <img className={styles.item} alt="" src="/rectangle-325.svg" />
            <b className={styles.b4}>10</b>
          </div>
          <div className={styles.div26}>
            <img className={styles.item} alt="" src="/rectangle-326.svg" />
            <b className={styles.b26}>9</b>
          </div>
          <div className={styles.div27}>
            <img className={styles.item} alt="" src="/rectangle-327.svg" />
            <b className={styles.b26}>8</b>
          </div>
          <div className={styles.div28}>
            <img className={styles.child} alt="" src="/rectangle-328.svg" />
            <b className={styles.b26}>7</b>
          </div>
          <div className={styles.div29}>
            <img className={styles.item} alt="" src="/rectangle-329.svg" />
            <b className={styles.b26}>6</b>
          </div>
          <div className={styles.div30}>
            <img className={styles.item} alt="" src="/rectangle-330.svg" />
            <b className={styles.b26}>5</b>
          </div>
          <div className={styles.div31}>
            <img className={styles.item} alt="" src="/rectangle-331.svg" />
            <b className={styles.b26}>4</b>
          </div>
          <div className={styles.div32}>
            <img className={styles.item} alt="" src="/rectangle-332.svg" />
            <b className={styles.b26}>3</b>
          </div>
          <div className={styles.div33}>
            <img className={styles.item} alt="" src="/rectangle-333.svg" />
            <b className={styles.b26}>2</b>
          </div>
          <div className={styles.div34}>
            <img className={styles.item} alt="" src="/rectangle-334.svg" />
            <b className={styles.b26}>1</b>
          </div>
          <div className={styles.saturday}>
            <img
              className={styles.saturdayChild}
              alt=""
              src="/rectangle-335.svg"
            />
            <b className={styles.saturday1}>saturday</b>
          </div>
          <div className={styles.friday}>
            <img
              className={styles.saturdayChild}
              alt=""
              src="/rectangle-336.svg"
            />
            <b className={styles.saturday1}>Friday</b>
          </div>
          <div className={styles.thursday}>
            <img
              className={styles.saturdayChild}
              alt=""
              src="/rectangle-337.svg"
            />
            <b className={styles.saturday1}>Thursday</b>
          </div>
          <div className={styles.wednesday}>
            <img
              className={styles.saturdayChild}
              alt=""
              src="/rectangle-338.svg"
            />
            <b className={styles.saturday1}>Wednesday</b>
          </div>
          <div className={styles.tuesday}>
            <img
              className={styles.saturdayChild}
              alt=""
              src="/rectangle-339.svg"
            />
            <b className={styles.saturday1}>TUESDAY</b>
          </div>
          <div className={styles.monday}>
            <img
              className={styles.saturdayChild}
              alt=""
              src="/rectangle-340.svg"
            />
            <b className={styles.saturday1}>MONDAY</b>
          </div>
          <div className={styles.sunday}>
            <img
              className={styles.saturdayChild}
              alt=""
              src="/rectangle-341.svg"
            />
            <b className={styles.saturday1}>SUNDAY</b>
          </div>
          <div className={styles.monthyear}>
            <img
              className={styles.monthyearChild}
              alt=""
              src="/rectangle-8.svg"
            />
            <b className={styles.month2023}>Month 2023</b>
          </div>
          <img
            className={styles.keyboardArrowUp}
            alt=""
            src="/keyboard-arrow-up.svg"
          />
          <img
            className={styles.keyboardArrowUp1}
            alt=""
            src="/keyboard-arrow-up1.svg"
          />
        </div>
        <h5 className={styles.attendance1}>Attendance</h5>
      </div>
      <NavBar
        onNotificationsClick={onNotificationsClick}
        onAttendanceClick={onAttendanceClick}
        onPaymentsClick={onPaymentsClick}
        onRequestsClick={onRequestsClick}
        onServicesClick={onServicesClick}
        onUpdateClick={onUpdateClick}
        navBarHeight="1013px"
      />
    </div>
  );
};

export default AttendanceExterior;
