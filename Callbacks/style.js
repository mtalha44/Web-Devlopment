function getData(data,getNextData,getanNextData,getanNextData1){
    setTimeout(()=>{
        console.log("data:",data);
        if(getNextData)
        {
            getNextData();
        }
        if(getanNextData)
            {
                getanNextData();
            }
            if(getanNextData1)
                {
                    getanNextData1();
                }
    },2000)
}
 getData(1,()=>{
        console.log("getting data2...");
        getData(2,()=>{
            console.log("getting data3...");
            getData(5,()=>{
                console.log("getting data4...");
                getData(6);
            });
        });
})