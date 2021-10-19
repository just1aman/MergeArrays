//merge arays [0,2,4,5,7] and [3,4,9,10,15,17]

function mergeArrays(arr1, arr2)
{
  if(arr1.length===0)
  {return arr2}
  if(arr2.length===0)
  {
    return arr1
  }
  let arr1index=0
  let arr2index=0
  let arr1item = arr1[arr1index]
  let arr2item = arr2[arr2index]
  
  const mergedArray = []
  
 

  while(arr1item || arr2item) 
  {
    console.log(arr1item + " " + arr2item)
   
    if(arr2item === undefined || arr1item<arr2item)
    {
     
      mergedArray.push(arr1item)
      
      arr1index++
      arr1item=arr1[arr1index]
     console.log("test" + arr1item)
    }
    else
    {
       mergedArray.push(arr2item)
      
       arr2index++
      
      arr2item=arr2[arr2index]
      
    }
  }

return mergedArray

}

mergeArrays([2,8,24], [3,4,9,10,15,17])