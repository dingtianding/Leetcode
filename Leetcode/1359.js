var UndergroundSystem = function() 
{
        let completedTrips = new Map();
        let stations = {};
        let stationId = 1;
        let travelling = new Map();
        
        /** 
         * @param {number} id 
         * @param {string} stationName 
         * @param {number} t
         * @return {void}
         */
        const checkIn = function(id, stationName, t)
        {
                /* Record the given passenger as en-route from stationName at time t. */
                let sid = stations[stationName];
                if(!sid)
                {
                        stations[stationName] = stationId;
                        sid = stationId++;
                }
                travelling.set(id,[sid,t]);   // Starting station and start time
        };
    
        /** 
         * @param {number} id 
         * @param {string} stationName 
         * @param {number} t
         * @return {void}
         */
        const checkOut = function(id, stationName, t) 
        {
                /* Find the checkout station and record the trip. */
                let sid = stations[stationName];
                if(!sid)
                {
                        stations[stationName] = stationId;
                        sid = stationId++;
                }
                
                let trip = travelling.get(id);
                let trips = completedTrips.get(trip[0]+','+sid) || [];
                trips.push(t - trip[1]);
                completedTrips.set(trip[0]+','+sid, trips);
                travelling.delete(id);
        };

        /** 
         * @param {string} startStation 
         * @param {string} endStation
         * @return {number}
         */
        const getAverageTime = function(startStation, endStation) 
        {
                let trips = completedTrips.get(stations[startStation]+','+stations[endStation]);
                let sum = trips.reduce((acc,val)=>acc+val,0);
                return sum/trips.length;
        };
        
        return {checkIn,checkOut,getAverageTime};
};



/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */