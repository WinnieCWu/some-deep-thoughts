import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";
import ThoughtForm from "../components/ThoughtForm";
import ThoughtList from "../components/ThoughtList";
import FriendList from "../components/FriendList";
import Auth from "../utils/auth";
//since we need to check logged in status of a user

const Home = () => {
  // use useQuery hook to make query request
  //with loading property, it indicates req isn't done yet; when it is, data is returned from the server
  //loading enables conditionally render data regardless if there's data to display
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  //if user logged in, userData will return all info from our query and load it to friendlist component
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  //get thought data out of query's response bc every GraphQL response comes in a big data ObjectId
  //if data exists, store in thought constant; if undefined(no data exists), save an empty array
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ThoughtForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}

          {loggedIn && userData ? (
            <div className="col-12 col-lg-3 mb-3">
              <FriendList
                username={userData.me.username}
                friendCount={userData.me.friendCount}
                friends={userData.me.friends}
              />
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Home;
