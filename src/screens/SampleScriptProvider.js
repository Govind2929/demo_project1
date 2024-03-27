// import React, { createContext, useState } from 'react';

// const SampleScriptContext = createContext();

// const SampleScriptProvider = ({ children }) => {
//     const [sampleScriptData, setSampleScriptData] = useState([
//         {
//           title: "Introduction",
//           content: "This is the introductory section of the script. It sets the scene and introduces the characters.",
//         },
//         {
//           title: "Scene 1",
//           content: "Dialogue and actions take place in this first scene.",
//         },
//         {
//           title: "Scene 2",
//           content: "More dialogue and actions unfold here.",
//         },
//         // ... You can add more script entries as needed
//       ]);

// //   const updateSampleScriptData = (newData) => {
// //     setSampleScriptData(newData);
// //   };

// //const [sampleScriptData, setSampleScriptData] = useState([]); // Initial empty array
// const [isLoading, setIsLoading] = useState(true); // Initial loading state

// useEffect(() => {
//   // Fetch script data asynchronously
//   console.log('Sample@@@', );
//   const fetchData = async () => {
//     const fetchedData = await /* ... your data fetching logic */
//     setSampleScriptData(fetchedData);
//     setIsLoading(false);
//   };
//   console.log('SampleScriptContext:22@', sampleScriptData[0]);
//   fetchData();
// }, []);
//   return (
//     <SampleScriptContext.Provider value={{ sampleScriptData, isLoading }}>
//     {children}
//   </SampleScriptContext.Provider>
//   );
// };

// export { SampleScriptContext, SampleScriptProvider };


import React, { createContext, useState } from 'react';

const ScriptDataContext = createContext({
  scripts: [],
  addScript: () => {},
});

export default ScriptDataContext;