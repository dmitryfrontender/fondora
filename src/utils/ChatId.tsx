// import { useLocation } from "react-router-dom";

export function UseChatId(path: string) {
	// const location = useLocation();
	// const path = location.pathname;
	const chatId = path.substring(16);
	return chatId;
}

// export default useChatId
