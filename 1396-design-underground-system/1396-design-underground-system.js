
class UndergroundSystem {
    constructor(){
        this.checkedIn = {}
        this.journeyData = {}
    }
    // Create Object of CheckedIn => Status
    //      Key = Used Id
    //      Value = Station, Time
    // Create Object of Historical Travels => Difference/Travel Time
    //      Key = [Station1, Station2]
    //      Value = [totaltime, # ofm trip]
    
    
   checkIn(id, stationName, t){
        this.checkedIn[id] = [stationName,t]
       //console.log("checkedin!")
       //console.log(this.checkedIn[id])
       
      
   }
    checkOut(id, endStation, t){
        let [startStation, startTime] = this.checkedIn[id]
       // console.log(startStation, startTime)
        if(!([startStation, endStation] in this.journeyData)) this.journeyData[[startStation, endStation]] = [0,0]
         // console.log(this.journeyData[startStation, endStation])
          this.journeyData[[startStation, endStation]][0] +=(t-startTime)
          this.journeyData[[startStation, endStation]][1] ++ 
          delete this.checkedIn[id]
        //console.log("checkedout!")
        //console.log("journeydata",this.journeyData)


    }
    getAverageTime(startStation, endStation){
        //console.log(this.journeyData[startStation, endStation])
        let [totalTime, totalTrips] = this.journeyData[[startStation, endStation]]
        return totalTime/totalTrips
    }
    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
// UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
//     // Make sure that id is not already in the Checked in Object
//     // Store the input into an Object/Check it in to our Object
    
// };

// /** 
//  * @param {number} id 
//  * @param {string} stationName 
//  * @param {number} t
//  * @return {void}
//  */
// UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
//     // Find the key in CheckedIn Object or else return nil
//     // calculate the time difference(checkout time and the check in time that is already stored in the Checked IN)
//     // Remove it somehow/check it out
//     // Clarify: The time it takes to travel from startStation to endStation may be different from the time it takes to travel from endStation to startStation.?
//     //  Sort it alphabetically by station name before storing in difference with 
//     // Store it in our Travel Time object with station 1 station2 and the difference we calc before.
//     // So
    
// };

// /** 
//  * @param {string} startStation 
//  * @param {string} endStation
//  * @return {number}
//  */
// UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
//     // [L, W]
//     // [W, L]
    
    
// };

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

// 1. same person can't be checked in twice. Has to get checked out first. If conditional to
// 2. History of travel(check in/out) we want store in an array?
//     a. current status of individual is based on the lastest index of that array
// 3. Object: 
//      Trip 1: Key=> User Id Value=> [[Station,time]
//     Trip 2(checkout) Trip 1: Key=> User Id Value=> [[Station,time]
// 4. Object takes in the current position and time. Use array to keep track of past position and times
//Object is whoever,wherever is currently checked in ,and we remove and place in an array 
                                                    
                                                

    
