import useGenres from "@/hooks/UseGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
