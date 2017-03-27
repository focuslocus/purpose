import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const typeDefs = `
  type User {
    id: Int
    firstName: String
    lastName: String
    email: String
    goals: [Goal]
    theme: Theme
  }
  
  type Question {
    id: Int
    type: String
    text: String
    answer: Answer
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
  
  type Theme {
    id: Int
    userId: Int!
    name: String!
    year: String!
  }
  
  enum Status {
    DONE
    INPROGRESS
    READY
  }
  
  type Query {
    goals: [Goal]
    profile: User
    milestones: [Milestone]
    questions: [Question]
  }
  
  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

export default schema;
