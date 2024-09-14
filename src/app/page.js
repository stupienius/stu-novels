import Homepage from "./Homepage.js";

const chapterList = [
  {index:1,url:"https://www.google.com"},
  {index:2,url:"https://youtube.com"}
];

export default function Home() {
  return (
    <>
      <Homepage />
      <List />
      <Chapter chapter_now="1" />
      <h1>hello world</h1>
    </>
  );
}

function List(){
  return (
    <>
      <ul>
        {chapterList.map(chapter => (
          <li>
            <a href={chapter.url}>{chapter.index}</a>
          </li>
        ))}
      </ul>
    </>
  );
}


function Chapter({chapter_now}){
  return (
    <>
      <p>
        {chapter_now}
      </p>
    </>
  );
}
