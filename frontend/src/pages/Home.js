import React, { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import styled from "styled-components"; // Import styled from styled-components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const WorkoutsContainer = styled.div`
  flex: 3;
`;

const WorkoutFormContainer = styled.div`
  flex: 1;
`;

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <HomeContainer>
      <WorkoutsContainer>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </WorkoutsContainer>
      <WorkoutFormContainer>
        <WorkoutForm />
      </WorkoutFormContainer>
    </HomeContainer>
  );
};

export default Home;