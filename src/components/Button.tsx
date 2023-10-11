function Button({
  content,
  onBtnClicked,
}: {
  content: string;
  onBtnClicked: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="bg-orange-400 p-4 rounded-md md:text-lg hover:bg-orange-500" onClick={onBtnClicked}>
      {content}
    </button>
  );
}

export default Button;