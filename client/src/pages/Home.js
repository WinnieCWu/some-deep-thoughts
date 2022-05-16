import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
   // use useQuery hook to make query request
   //with loading property, it indicates req isn't done yet; when it is, data is returned from the server
   //loading enables conditionally render data regardless if there's data to display 
   const { loading, data } = useQuery(QUERY_THOUGHTS);
  
   //get thought data out of query's response bc every GraphQL response comes in a big data ObjectId
   //if data exists, store in thought constant; if undefined(no data exists), save an empty array
   const thoughts = data?.thoughts || [];
   console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
