const Notice = () => {
  return (
    <tbody>
      <tr className="h-12 bg-gray-500 text-white">
        <td className="p-2">
          <p className="line-clamp-1">
            현재 게시판은 작업중입니다. 최대한 빠른 시일 내에 작업을
            완료하겠습니다.
          </p>
        </td>
        <td>Kwak.dev</td>
        <td className="text-center text-sm text-blue-500">-</td>
        <td className="text-center text-sm text-red-500">-</td>
        <td className="text-center text-sm">-</td>
        <td className="text-center text-sm">-</td>
      </tr>
    </tbody>
  );
};

export default Notice;
