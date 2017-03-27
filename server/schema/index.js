import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const typeDefs = `
  type User {
    id: Int
    firstName: String
    lastName: String
    email: String
  }
  
  type Question {
    id: Int
    type: String
    question: String
  }
  
  type Answer {
    id: Int
    questionId: Int!
    userId: Int!
    text: String
  }
  
  type Milestone {
    id: Int
    goalId: Int!
    title: String
    notes: String
    date: String
    status: Status
  }
  
  type Goal {
    id: Int
    userId: Int!
    focusId: Int!
    questions: [Question]
    milestones: [Milestone]
  }
  
  enum Status {
    done
    in progress
    ready
  }
  
  type Query {
    goals: [Goal]
    profile: User
  }
  
  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

export default schema;
