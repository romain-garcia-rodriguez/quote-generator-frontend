function Button ({ content }: { content: string }) {
    return <button className='bg-orange-400 p-4 rounded-md'>
        { content }
    </button>
}

export default Button;