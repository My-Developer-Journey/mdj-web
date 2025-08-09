import { Card, CardContent } from "../common/card"

const MyPostStatistic = () => {
  return (
    <div>
        <Card className="w-full px-[2rem] py-[1rem] h-full">
            <CardContent>
                <div className="flex items-center justify-between w-full gap-[1.5rem]">
                    {/* Tổng số bài viết */}
                    <div className="w-1/2 text-center">
                        <div className="text-4xl font-bold text-gray-800 mb-2">128</div>
                        <div className="text-sm text-gray-500">Total Posts</div>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-[80px] bg-gray-300" />

                    {/* Tổng số bình luận */}
                    <div className="w-1/2 text-center">
                        <div className="text-4xl font-bold text-gray-800 mb-2">342</div>
                        <div className="text-sm text-gray-500">Total Comments</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default MyPostStatistic