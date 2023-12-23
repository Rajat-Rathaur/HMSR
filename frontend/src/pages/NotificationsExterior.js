import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./NotificationsExterior.module.css";
const NotificationsExterior = () => {
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
    <div className={styles.notificationsexterior}>
      <div className={styles.notification}>
        <div className={styles.notificationtable}>
          <div className={styles.frame8variant7}>
            <div className={styles.select}>
              <img
                className={styles.iconArrowIosDownward}
                alt=""
                src="/-icon-arrow-ios-downward1.svg"
              />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-4.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select2}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
            <div className={styles.select1}>
              <img className={styles.select4Icon} alt="" src="/select-41.svg" />
            </div>
          </div>
          <div className={styles.frame8variant71}>
            <div className={styles.select24}>
              <div className={styles.date}>Date</div>
            </div>
            <div className={styles.select25}>
              <div className={styles.div}>1/15/12</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>11/7/16</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>12/4/17</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>6/19/14</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>10/6/13</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>10/28/12</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>5/27/15</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>7/27/13</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>3/4/16</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>12/10/13</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>1/31/14</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>7/11/19</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>5/27/15</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>6/21/19</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>5/19/12</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>5/7/16</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>9/23/16</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>8/16/13</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>5/30/14</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>1/28/17</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>8/2/19</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>9/18/16</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>8/30/14</div>
            </div>
          </div>
          <div className={styles.frame8variant72}>
            <div className={styles.select24}>
              <div className={styles.date}>Time</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>06:32 pm</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>01:09 am</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>02:34 am</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>08:20 pm</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>02:02 am</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>12:23 pm</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>05:36 pm</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>07:38 am</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>05:14 pm</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>01:34 pm</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>05:51 am</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>06:42 am</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>12:01 pm</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>11:49 pm</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>11:23 pm</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>05:49 pm</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>07:59 pm</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>04:02 am</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>10:41 pm</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>07:13 pm</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>11:27 pm</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>04:15 am</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>03:48 am</div>
            </div>
          </div>
          <div className={styles.frame8variant73}>
            <div className={styles.select72}>
              <div className={styles.typePayRem}>Type pay rem, response</div>
              <div className={styles.description}>Description</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>fan broken</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>want leave</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>{`need water `}</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>want leave for uncles marriage</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>laundry is not working fine</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>mess food too salty</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select2}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
            <div className={styles.select1}>
              <div className={styles.div}>i dont want to do engg</div>
            </div>
          </div>
        </div>
        <button className={styles.markAllAsReadWrapper}>
          <span className={styles.markAllAs}>Mark all as read</span>
        </button>
        <h2 className={styles.notifications}>Notifications</h2>
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

export default NotificationsExterior;
