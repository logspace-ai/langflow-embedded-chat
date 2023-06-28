import { MessageSquare, X } from "lucide-react"
export default function ChatTrigger({style, open, setOpen, triggerRef}:{style?:React.CSSProperties, open:boolean, setOpen:Function, triggerRef:React.RefObject<HTMLDivElement>|null}){
    
    return (
        <div ref={triggerRef}>
            <button style={style} onClick={()=>setOpen(!open)} className="bg-blue-500 hover:bg-blue-700 w-12 h-12 text-white font-bold rounded-full flex justify-center items-center">
                {open?<X className="h-1/2 w-1/2"/>:<MessageSquare className="h-1/2 w-1/2"/>}
            </button>
        </div>
    )
}