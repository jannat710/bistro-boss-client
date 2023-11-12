import service from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className='relative'>
            <img className='h-[50vh] w-full mx-auto' src={service} alt="" />
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center px-24'>
                <div className='bg-black p-4 md:p-10 lg:p-20 opacity-50'>
                    <h1 className='text-4xl text-white text-center'>Bistro Boss</h1>
                    <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>

    );
};

export default BistroBoss;