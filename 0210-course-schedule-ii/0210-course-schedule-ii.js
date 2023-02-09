/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// prerequisites[i] = [ai, bi] == Take B before A
// return ordering in any order
// if not possible to take all courses, return []
// numCourse = 4 = 0, 1, 2, 3
// Exp1: there 2 course, and we have take 0 before we take 1. So 0 -> 1 = [0,1]
// Exp2: 4 courses. 
// 1. 0, 1, 2, are preq course that unlock other courses
// Exp3: 1 course, and take 0 and get the courses
// 1. build graph with the limit/restriction (preq)
//    ? graph: approach A = 
//      3: []
//      2: [3]
//.     1: [3]
//.     0: [1,2] //[0,1,3] =>[3, 1, 2, 0]
//.    we find all the class with empty array(no preq)
//.    we remove that class from other classes' preq  as we "take" it
// 2. Use the graph until we reached a condition(numCourses = 0) return ordering
//    b. decrease numCourses
// 3. if we can't decrease, we return -1(impossible to finish)
// 2N
// space N or N^2
// var findOrder = function(numCourses, prerequisites) {
//     const graph = {}
    
//     for(let c = 0; c<numCourses;c++){
//         graph[c]=[]
//     }
    
//     for(let i = 0; i < prerequisites.length; i++){
//         let prerequisite = prerequisites[i]
//         let unlocked = prerequisite[0]
//         let needed = prerequisite[1]
//         graph[needed].push(unlock)// i take 0 I unlocked 1 and 2
//     }
//     let result = []
//     while(numCourses > 0){ //[0,1,2,3]
//         for(key in graph){
            
//         }
//     }
//     return result
// };


const findOrder = (numCourses, prerequisites) => {
  const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    inDegrees[v]++; // [0,0,0,0] 
  }

  const q = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const degree = inDegrees[i];
    if (degree === 0) q.push(i);
  }

  const res = [];
  while (q.length) {//
    const u0 = q.shift();
    numCourses--;
    res.push(u0);// [0,1,2,3]
    for (const [v, u] of prerequisites) {
      if (u === u0) { //[3,2]
        inDegrees[v]--;//
        if (inDegrees[v] === 0) q.push(v);// q= [3] res=[0,1,2]
      }
    }
  }
  return numCourses === 0 ? res : [];
};