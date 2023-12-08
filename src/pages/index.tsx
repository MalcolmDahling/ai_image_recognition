import TrainForm from '@/components/TrainForm/TrainForm';
import Main from '@/components/Main/Main';
import Wrapper from '@/components/Wrapper/Wrapper';
import { useEffect, useState } from 'react';
import SelectImage from '@/components/SelectImage/SelectImage';
import ImageProcessor from '@/components/ImageProcessor/ImageProcessor';
import Heading from '@/components/Heading/Heading';
import Prediction from '@/components/Prediction/Prediction';
import Loading from '@/components/Loading/Loading';
import axios from 'axios';

export type pixelData = {
  r: number;
  g: number;
  b: number;
};

export default function Index() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [pixelArr, setPixelArr] = useState<pixelData[]>([]);
  const [prediction, setPrediction] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [loading, setLoading] = useState(true);
  const [trainedModel, setTrainedModel] = useState();

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await axios.get('/data.json');

    setTrainedModel(res.data);
    setLoading(false);
  }

  return (
    <Wrapper>
      <Main>
        {loading === false && (
          <>
            <Heading></Heading>
            <ImageProcessor
              imageUrl={imageUrl}
              setPixelArr={(input: any) => setPixelArr(input)}
            ></ImageProcessor>
            <SelectImage setImageUrl={(input: string) => setImageUrl(input)}></SelectImage>
            <TrainForm pixelArr={pixelArr}></TrainForm>
            <Prediction
              prediction={prediction}
              accuracy={accuracy}
            ></Prediction>
          </>
        )}
        {loading && <Loading></Loading>}
      </Main>
    </Wrapper>
  );
}
