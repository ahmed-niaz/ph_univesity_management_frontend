import { useGetAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

export const AcademicSemester = () => {
  const { data } = useGetAcademicSemesterQuery(undefined);
  console.log(data);

  return <div>academicSemester</div>;
};
