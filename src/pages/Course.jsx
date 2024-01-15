const Excel = [
  {
    id: 1,
    text: "تبسيط الاكسيل 1",
    link: "https://www.youtube.com/embed/11sfdkrV6AU",
  },
  {
    id: 2,
    text: "تبسيط الاكسيل 2",
    link: "https://www.youtube.com/embed/rM55SQaILUU",
  },
  {
    id: 3,
    text: "تبسيط الاكسيل 3",
    link: "https://www.youtube.com/embed/jCVr7oADcSM",
  },
];

function Course() {
  return (
    <section className="container">
    {Excel.map((e, i) => (
        <div>
        <h4>{e.text}</h4>
            
          <div className="ratio ratio-16x9 mt-3" style={{ width: "40rem" }}>
           
            <iframe
              src={e.link}
              title="GlobeMed i care جلوبميد"
              allowFullScreen
            ></iframe>
          </div>
          </div>
          ))}
    </section>
  );
}

export default Course;
