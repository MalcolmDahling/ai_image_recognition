import { pixelData } from '@/pages';
import axios from 'axios';
import React, { useRef, useEffect } from 'react';
import { ImageProcessorCanvasStyle } from './ImageProcessor.css';

type Props = {
  imageUrl: string;
  setPixelArr: (input: pixelData[]) => void;
};

export default function ImageProcessor(props: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  async function loadImage() {
    const canvas = canvasRef.current;

    if (!canvas) {
      //console.error('Canvas element not found.');
      return;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      //console.error('2D context not supported.');
      return;
    }

    try {
      const response = await axios.post<{ imageUrl: string }>('/api/getImage', {
        imageUrl: props.imageUrl,
      });

      const img = new Image();
      img.src = response.data.imageUrl;

      img.onload = async () => {
        // Resize the image to 320x180
        canvas.width = 160;
        canvas.height = 90;
        context.drawImage(img, 0, 0, 160, 90);

        // Get RGB data for each pixel
        const imageData = context.getImageData(0, 0, 160, 90).data;

        const pixelArray: pixelData[] = [];

        for (let i = 0; i < imageData.length; i += 4) {
          const pixel: pixelData = {
            r: imageData[i],
            g: imageData[i + 1],
            b: imageData[i + 2],
          };
          pixelArray.push(pixel);
        }

        props.setPixelArr(pixelArray);
      };
    } catch (error) {
      //console.error('Error fetching image URL:', error);
    }
  }

  useEffect(() => {
    loadImage();
  }, [props.imageUrl]);

  if (props.imageUrl !== '') {
    return (
      <canvas
        ref={canvasRef}
        className={ImageProcessorCanvasStyle()}
      />
    );
  } else return null;
}
