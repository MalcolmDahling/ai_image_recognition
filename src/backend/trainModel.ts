const axios = require('axios');
const tf = require('@tensorflow/tfjs');
const fs = require('fs');
const path = require('path');

const publicFolder = path.join(process.cwd(), 'public');
const filePath = path.join(publicFolder, 'data.json');
const modelFilePath = path.join(publicFolder, 'trainedModel.json');

const model = tf.sequential({
  layers: [tf.layers.dense({ units: 1, inputShape: [3] })],
});
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });
const batchSize = 32;
const totalEpochs = 10;

async function start() {
  console.log('Loading data...');
  const data = JSON.parse(fs.readFileSync(filePath));
  console.log('Complete.');

  console.log('Converting data...');
  const xsArray = data.map((entry: any) => entry.input.flatMap((color: any) => [color.r, color.g, color.b]));
  const ysArray = data.map((entry: any) => [entry.output]);
  const xs = tf.tensor2d(xsArray);
  const ys = tf.tensor2d(ysArray);
  console.log('Complete.');

  console.log('Training model...');
  for (let epoch = 0; epoch < totalEpochs; epoch++) {
    // Shuffle data before each epoch
    const shuffledIndices = tf.util.createShuffledIndices(xs.shape[0]);
    const shuffledXs = tf.gather(xs, shuffledIndices);
    const shuffledYs = tf.gather(ys, shuffledIndices);

    // Train in batches
    for (let i = 0; i < xs.shape[0]; i += batchSize) {
      const end = Math.min(i + batchSize, xs.shape[0]);
      const batchXs = shuffledXs.slice([i, 0], [end - i, xs.shape[1]]);
      const batchYs = shuffledYs.slice([i, 0], [end - i, ys.shape[1]]);

      await model.fit(batchXs, batchYs, { epochs: 1 });
    }

    console.log(`Epoch ${epoch + 1} completed.`);
  }
  console.log('Complete.');

  console.log('Saving model...');
  await model.save(`file://${modelFilePath}`);
  console.log('Complete.');
}

start();
