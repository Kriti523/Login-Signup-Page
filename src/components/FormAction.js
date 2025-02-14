/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function FormAction({
    handleSumbit,
    type='Button',
    action='submit',
    text
})
{
    return(
        <>
        {
            type==='Button' ?
            <button
              type={action}
              className="group relative w-full flex justify-center py-2 px-4 border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mt-10"
              onSubmit={handleSumbit}  
            >
                {text}
            </button>
            :
            <></>
        }
        </>
    )
}