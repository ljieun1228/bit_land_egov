package com.bit_land.web.cmm;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component @Data @Lazy
public class Proxy {
	private int pageNum, pageSize, blockSize, startRow, 
		endRow, startPage, endPage, prevBlock, nextBlock, totalCount;
	private String key;//은영언니
    private boolean existPrev, existNext;

    public void carryOut(Map<?,?> paramMap) {

        // page_num, page_size, block_Size, total_count
    	
    	key = (String) paramMap.get("keyword");//키를 여기에 한번 담아주고 간다. 
    	
        String _pageNum = (String) paramMap.get("page_num");
        pageNum = ((String) paramMap.get("page_num") == null) ? 1 : Integer.parseInt(_pageNum);
        System.out.println("페이지네이션 페이지넘" + pageNum);

        String _pageSize = (String) paramMap.get("page_size");
        pageSize = ((String) paramMap.get("page_size") == null) ? 5 : Integer.parseInt(_pageSize);
        System.out.println("페이지네이션 페이지사이즈" + pageSize);

        String _blockSize = (String) paramMap.get("block_size");
        blockSize = ((String) paramMap.get("block_size") == null) ? 5 : Integer.parseInt(_blockSize);

        totalCount = (int)paramMap.get("total_count");

        int nmg = totalCount % pageSize;
        int pageCount = (nmg == 0) ? totalCount / pageSize : totalCount / pageSize + 1;

        System.out.println("총페이지 수:" + pageCount);

        startRow = (pageNum - 1) * pageSize; // MySQL 은 인덱스처리해서 +1 삭제
        System.out.println("스타트 로우:" + startRow);

        endRow = (totalCount > pageNum * pageSize) ? pageNum * pageSize : totalCount;
        System.out.println("END로우:" + endRow);

        int blockNum = (pageNum-1)/blockSize;
		if(existPrev) {
			startPage = blockNum*blockSize+1;
			
		}else {
			startPage = 1;
		}
		endPage = startPage+(blockSize-1);
		startPage = pageNum -((pageNum-1)%blockSize);
		endPage = startPage+(blockSize-1);
		if(endPage>pageCount) {
			endPage = pageCount;
		}

        existPrev = (startPage - pageSize) > 0;
        existNext = (startPage + pageSize) <= pageCount;
        prevBlock = startPage - pageSize;
        nextBlock = startPage + pageSize;
        System.out.println("스타트페이지: " + startPage);
        System.out.println("엔드페이지: " + endPage);
        System.out.println("프리브블록: " + prevBlock);
        System.out.println("넥스트블록: " + nextBlock);
    }
}
