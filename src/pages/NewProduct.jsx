import { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';
export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);

    // 제품의 사진을 Cloudinary에 업로드 하고 URL을 획득
    // Firebase에 새로운 제품을 추가함
    uploadImage(file) //
      .then((url) => {
        addNewProduct(product, url) //
          .then(() => {
            setSuccess('성공적으로 제품이 추가되었습니다.');
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
      })
      .finally(() => setIsUploading(false));
  };
  return (
    <section className='w-[1440px] mx-auto text-center'>
      <h2 className='text-xl font-medium my-4'>새로운 제품 등록</h2>
      {success && <p className='my-2'>✅ {success}</p>}
      <div className='flex justify-center'>
        <div className='w-[70%]'>
          {file && (
            <img
              className='w-140 mx-auto mb-2'
              src={URL.createObjectURL(file)}
              alt='local file'
            />
          )}
        </div>
        <form
          className='w-[30%] flex flex-col p-2 gap-2'
          onSubmit={handleSubmit}
        >
          <input
            type='file'
            accept='image/*'
            name='file'
            required
            onChange={handleChange}
          />
          <input
            type='text'
            name='title'
            value={product.title ?? ''}
            placeholder='제품명'
            required
            onChange={handleChange}
          />
          <input
            type='number'
            name='price'
            value={product.price ?? ''}
            placeholder='가격'
            required
            onChange={handleChange}
          />
          <input
            type='text'
            name='description'
            value={product.description ?? ''}
            placeholder='제품 설명'
            required
            onChange={handleChange}
          />
          <input
            type='text'
            name='options'
            value={product.options ?? ''}
            placeholder='옵션들(콤마(,)로 구분'
            required
            onChange={handleChange}
          />
          <Button
            text={isUploading ? '업로드중...' : '제품 등록하기'}
            disabled={isUploading}
          />
        </form>
      </div>
    </section>
  );
}
