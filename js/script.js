const create = (e)=>{
e.preventDefault()
  // console.log(e.target[0].value);
  let result = document.getElementById("result")
  const width= e.target[0].value
  const height= e.target[1].value
  const bgColor= e.target[2].value
  const borderR= e.target[3].value
  console.log(width,height,bgColor,borderR);

  result.style.width = `${width}px`
  result.style.height = `${height}px`
  result.style.backgroundColor = `${bgColor}`
  result.style.borderRadius = `${borderR}`
}