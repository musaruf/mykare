import React, { useMemo } from "react";
import useHome from "../hooks/useHome";

const Home = () => {
  // Custom hooks
  const { logout, userFunc, users, usersList } = useHome();

  // memoization for optimization
  useMemo(() => {
    userFunc();
  }, []);

  return (
    <div className="container align-items-center">
      <div className="row bootstrap snippets bootdeys justify-content-center">
        <div className="col-md-8 col-sm-12">
          <div className="user-wrapper">
            <div className="panel panel-info">
              <div className="panel-heading m-4 text-center head-cont">
                <h1>Welcome to Mykare</h1>
                <p>Your Health Care Journey Made Comfortable</p>
              </div>
              <div className="container panel-body">
                {usersList ? (
                  <div className="mt-3">
                    <h3>Logged users</h3>
                    <ul className="user-list">
                      {users?.map((user, i) => (
                        <li className="user">
                          <div className="user-body mt-4">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar7.png"
                              alt=""
                              className="img-circle"
                            />
                            <strong className="text-success mx-2" key={i}>
                              {user?.username}
                            </strong>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-3">
                    <h3>Mykare Health</h3>
                    <p className="lead mt-4">
                      Our human-like tech platform ensures ease and comfort
                      throughout your medical journey. Your health is our
                      happiness.
                    </p>
                  </div>
                )}
                <button
                  className="btn btn-dark mt-3 mb-5"
                  onClick={() => logout()}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
