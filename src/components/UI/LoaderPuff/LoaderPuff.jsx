import { Puff } from 'react-loader-spinner';
import { LoaderPuffContrainer } from './LoaderPuff.styled';

export const LoaderPuff = () => {
  return (
    <LoaderPuffContrainer>
      <Puff
        visible={true}
        height="100"
        width="100"
        color="#FF9F1C"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderPuffContrainer>
  );
};
