type ReviewProps = {
  author: string;
  content: string;
};

const Review = ({ author, content }: ReviewProps) => {
  return (
    <div className='mb-5'>
      <div className='font-bold'>{author}</div>
      <div>{content}</div>
    </div>
  );
};

export { Review };
